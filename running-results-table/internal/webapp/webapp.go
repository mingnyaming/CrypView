package webapp
    import (
        "net/http"
        "pusher/running-results-table/internal/db"
        "pusher/running-results-table/internal/notifier"

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
            c.JSON(http.StatusOK, gin.H{
                "results": results,
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
