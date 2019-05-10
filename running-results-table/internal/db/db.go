package db
    type Record struct {
        Name string  `json:"name"`
        Time float32 `json:"time"`
    }

    //생성자 함수
    //
    func NewRecord(name string, time float32) Record {
        return Record{name, time}
    }
    type Database struct {
        contents []Record
    }

    // 함수명 New()의 함수.
    // Funcの名がNew()
    func New() Database {
        contents := make([]Record, 0)
        return Database{contents}
    }

    // 레코드 더하고 가져오는 함수들. 함수명 앞 부분은 한정자로 Database 구조체에서 사용됨을 의미
    // Recordの追加や持ってくるときに使用する。Func名前の部分はDatabase　Structだけで使用することを意味。
    func (database *Database) AddRecord(r Record) {
        database.contents = append(database.contents, r)
    }
    func (database *Database) GetRecords() []Record {
        return database.contents
    }
