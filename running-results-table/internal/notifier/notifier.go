package notifier
    import (
        "pusher/running-results-table/internal/db"
        "github.com/pusher/pusher-http-go"
    )
    type Notifier struct {
        notifyChannel chan<- bool
    }
    func notifier(database *db.Database, notifyChannel <-chan bool) {
        client := pusher.Client{
            AppId:   "777982",
            Key:     "441c10743167d14b00fc",
            Secret:  "ed81d133a2fc233b6df7",
            Cluster: "ap3",
            Secure:  true,
        }
        for {
            <-notifyChannel
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
