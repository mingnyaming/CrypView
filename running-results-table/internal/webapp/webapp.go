package webapp

import (
	"net/http"
	"pusher/running-results-table/internal/db"
	"pusher/running-results-table/internal/notifier"

	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

//
func StartServer(database *db.CoinPriceDatabase, notifierClient *notifier.Notifier) {
	r := gin.Default()
	r.Use(cors.Default())
	notifierClient.Notify()

	r.GET("/results", func(c *gin.Context) {
		results := database.GetPrice()
		db.Get_Coin_Price_From_bithumb()
		db.GetDataFromDB()

		c.JSON(http.StatusOK, gin.H{
			"results": results,
		})
	})

	r.GET("/temp", func(c *gin.Context) {
		temp := "Simple Text"
		fmt.Println("Print Results")
		fmt.Println(temp)

		c.JSON(http.StatusOK, gin.H{
			"temp": temp,
		})
	})

	r.POST("/results", func(c *gin.Context) {
		var json db.CoinPriceRecord

		// errはここだけで（if中で）使用できる。
		if err := c.BindJSON(&json); err == nil {
			database.AddCoinData(json)
			c.JSON(http.StatusCreated, json)
			notifierClient.Notify()
		} else {
			c.JSON(http.StatusBadRequest, gin.H{})
		}
	})

	r.Run()
}
