package main

   import (
           "pusher/running-results-table/internal/db"
           "pusher/running-results-table/internal/notifier"
           "pusher/running-results-table/internal/webapp"
           "fmt"
   )

   func main() {
           //database := db.New()
           database := db.NewCoinPriceDatabase()
           db.DBInitailize()
           
           fmt.Println("Get Database Price============/")
           fmt.Println(database.GetPrice())

           notifierClient := notifier.New(&database)
           webapp.StartServer(&database, &notifierClient)
   }
