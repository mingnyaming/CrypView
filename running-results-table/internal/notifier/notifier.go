package notifier
    import (
        "pusher/running-results-table/internal/db"
        "github.com/pusher/pusher-http-go"
    )
    type Notifier struct {
      // notifyChannelて言う chanタイプのオブゼット宣言 (boolタイプ専用)
      // notifyがあるかどうかを確認するためのStruct.
        notifyChannel chan<- bool
    }
                                        //←chan bool はboolタイプ専用の意味。
    func notifier(database *db.Database, notifyChannel <-chan bool) {
        client := pusher.Client{
            AppId:   "777982",
            Key:     "441c10743167d14b00fc",
            Secret:  "ed81d133a2fc233b6df7",
            Cluster: "ap3",
            Secure:  true,
        }
        // 무한루프(無限ループ)
        for
          //notifyChannelの値段をもらう。
            <-notifyChannel
            // Mapタイプのdata宣言 : key "results(string)": value "databaseて言うstructの値段(GetRecordsを通して)")
            data := map[string][]db.Record{"results": database.GetRecords()}
            client.Trigger("results", "results", data)
        }
    }
    func New(database *db.Database) Notifier {
        notifyChannel := make(chan bool)
        go notifier(database, notifyChannel)
        return Notifier{
            notifyChannel,
        }
    }
    func (notifier *Notifier) Notify() {
        notifier.notifyChannel <- true
    }
