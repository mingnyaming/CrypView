package main

import (
	"database/sql"
	"pusher/running-results-table/internal/db"
	"pusher/running-results-table/internal/notifier"
	"pusher/running-results-table/internal/webapp"
)

func main() {
	//database := db.New()
	db.Get_Coin_Price_From_bithumb()
	database := db.NewCoinPriceDatabase()
	db.DBInitailize()
	notifierClient := notifier.New(&database)
	notifierClient.Notify()
	webapp.StartServer(&database, &notifierClient)
}
func DBinsert(tablename string, coinname string, price float32, primaryprice float32, volume float32) {
	database, _ := sql.Open("sqlite3", "./internal/db/test.db")
	statement, _ := database.Prepare("UPDATE CoinPrice SET price=? primaryprice=? volume=? WHERE name=?")
	statement.Exec(price, primaryprice, volume, coinname)
}
