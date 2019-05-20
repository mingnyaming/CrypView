package main

import (
	"pusher/running-results-table/internal/db"
	"pusher/running-results-table/internal/notifier"
	"pusher/running-results-table/internal/webapp"
)

func main() {
	//database := db.New()
	db.Get_Coin_Price_From_bithumb()
	database := db.NewCoinPriceDatabase()
	//db.DBInitailize()
	notifierClient := notifier.New(&database)
	notifierClient.Notify()
	webapp.StartServer(&database, &notifierClient)
}
