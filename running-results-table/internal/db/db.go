package db

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

type Record struct {
	Name string  `json:"name"`
	Time float32 `json:"time"`
}

type CoinPriceRecord struct {
	Name         string  `json:"name"`
	Price        float32 `json:"price"`
	PrimaryPrice float32 `json:"primaryprice"`
	Volume       float32 `json:"volume"`
}

//생성자 함수
//
func NewRecord(name string, time float32) Record {
	return Record{name, time}
}

func NewCoinPriceRecord(name string, price float32, primaryprice float32, volume float32) CoinPriceRecord {
	return CoinPriceRecord{name, price, primaryprice, volume}
}

type Database struct {
	contents []Record
}
type CoinPriceDatabase struct {
	contents []CoinPriceRecord
}

// 함수명 New()의 함수.
// Funcの名がNew()
func New() Database {
	contents := make([]Record, 0)
	return Database{contents}
}

// global and exported variable
var ImportingDataFromDB CoinPriceDatabase

// global and unexported variable
var importingDataFromDB CoinPriceDatabase

func GetImportingDataFromDB() CoinPriceDatabase {
	return importingDataFromDB
}

//DBのCoin値段データを持って来る
func GetPriceDataFromDB() []CoinPriceRecord {
	return ImportingDataFromDB.contents
}

func NewCoinPriceDatabase() CoinPriceDatabase {
	contents := make([]CoinPriceRecord, 0)
	// fmt.Println("Contents : ", CoinPriceDatabase{contents})
	// fmt.Println("Database Reset 中です。")
	return CoinPriceDatabase{contents}
}

func (database *Database) AddRecord(r Record) {
	database.contents = append(database.contents, r)
}
func (database *Database) GetRecords() []Record {
	//fmt.Println(database.contents)
	return database.contents
}

// 레코드 더하고 가져오는 함수들. 함수명 앞 부분은 한정자로 Database 구조체에서 사용됨을 의미
// Recordの追加や持ってくるときに使用する。Func名前の部分はDatabase　Structだけで使用することを意味。
// Structにデーターを追加する関数
func (database *CoinPriceDatabase) AddCoinData(r CoinPriceRecord) {
	database.contents = append(database.contents, r)
}

func (database *CoinPriceDatabase) GetPrice() []CoinPriceRecord {

	return GetDataFromDB().contents
}

func DBupdate(coinname string, price float32, primaryprice float32, volume float32) {
	database, _ := sql.Open("sqlite3", "./internal/db/Coin.db")
	statement, _ := database.Prepare("UPDATE CoinPrice SET price=?, primaryprice=?, volume=? WHERE name=?")
	statement.Exec(price, primaryprice, volume, coinname)
}

// statement, _ = database.Prepare("UPDATE CoinPrice SET price=? WHERE name=?")
// statement.Exec("24", "XtellaLumen")

// DB 초기화 = 파라미터에 대해
func GetDataFromDB() CoinPriceDatabase {
	// DBファイルあける

	fmt.Println("Start DBInitialize")
	database, _ := sql.Open("sqlite3", "./internal/db/Coin.db")

	rows, _ := database.Query("SELECT name, price, primaryprice, volume FROM CoinPrice")

	statement, _ := database.Prepare("INSERT INTO CoinPrice (name, price, primaryprice, volume) VALUES (?, ?, ?, ?)")
	statement.Exec("BSV", "0", "0", "0")
	statement, _ = database.Prepare("INSERT INTO CoinPrice (name, price, primaryprice, volume) VALUES (?, ?, ?, ?)")
	statement.Exec("ETC", "0", "0", "0")
	statement, _ = database.Prepare("INSERT INTO CoinPrice (name, price, primaryprice, volume) VALUES (?, ?, ?, ?)")
	statement.Exec("NPXS", "0", "0", "0")
	statement, _ = database.Prepare("INSERT INTO CoinPrice (name, price, primaryprice, volume) VALUES (?, ?, ?, ?)")
	statement.Exec("ENJ", "0", "0", "0")
	statement, _ = database.Prepare("INSERT INTO CoinPrice (name, price, primaryprice, volume) VALUES (?, ?, ?, ?)")
	statement.Exec("ELF", "0", "0", "0")

	var name string
	var price float32
	var primaryprice float32
	var volume float32

	//DBから持って来たCoinDataを一時貯蔵(Temporary save)する　オブゼクト

	var tempDataFromDB = NewCoinPriceDatabase()
	//DBの内容を１Rowずつ持って来て保存する
	for rows.Next() {
		rows.Scan(&name, &price, &primaryprice, &volume)

		var inputdata CoinPriceRecord

		inputdata.Name = name
		inputdata.Price = price
		inputdata.PrimaryPrice = primaryprice
		inputdata.Volume = volume

		tempDataFromDB.AddCoinData(inputdata)
	}
	return tempDataFromDB
}

// SQL Sample

// statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS CoinPrice (name TEXT PRIMARY KEY, price INTEGER, primaryprice INTEGER, volume INTEGER)")
// statement.Exec()
// statement, _ = database.Prepare("UPDATE CoinPrice SET price=?, primaryprice=?, volume=? WHERE name=?")
// statement.Exec("31.8.", "35.2", "49232", "Ripple")

// fmt.Println("Input Database ======================")
// statement, _ = database.Prepare("INSERT INTO CoinPrice (name, price, primaryprice, volume) VALUES (?, ?, ?, ?)")
// statement.Exec("Bitcoin", "900000", "870000", "342")
// fmt.Println("SUCCESS =============================")
