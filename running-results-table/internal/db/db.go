package db

import (
	"database/sql"

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
}

//생성자 함수
//
func NewRecord(name string, time float32) Record {
	return Record{name, time}
}

func NewCoinPriceRecord(name string, price float32, primaryprice float32) CoinPriceRecord {
	return CoinPriceRecord{name, price, primaryprice}
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

	return ImportingDataFromDB.contents
}

// DB 초기화 = 파라미터에 대해
func DBInitailize() {
	// DBファイルあける
	database, _ := sql.Open("sqlite3", "./internal/db/test.db")

	//NewCoinPriceDatabase()
	statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS CoinPrice (name TEXT PRIMARY KEY, price INTEGER, primaryprice INTEGER)")
	statement.Exec()
	//statement, _ = database.Prepare("INSERT INTO CoinPrice (name, price, primaryprice) VALUES (?, ?, ?)")
	//statement.Exec("Bitcoin", "860000", "840000")
	rows, _ := database.Query("SELECT name, price, primaryprice FROM CoinPrice")

	var name string
	var price float32
	var primaryprice float32

	//DBから持って来たCoinDataを一時貯蔵(Temporary save)する　オブゼクト
	importingDataFromDB = NewCoinPriceDatabase()

	//DBの内容を１Rowずつ持って来て保存する
	for rows.Next() {
		rows.Scan(&name, &price, &primaryprice)
		//fmt.Println(name + ": " + strconv.Itoa(price) + " " + strconv.Itoa(primaryprice))

		var inputdata CoinPriceRecord

		inputdata.Name = name
		inputdata.Price = price
		inputdata.PrimaryPrice = primaryprice

		ImportingDataFromDB.AddCoinData(inputdata)

		// fmt.Println("Appended Successfully@")
		// fmt.Println(ImportingDataFromDB)
		// fmt.Println(len(ImportingDataFromDB.contents))
		// fmt.Println("")

	}

}
