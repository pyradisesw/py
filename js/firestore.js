class Base {

    constructor(args) {
        //const results = this.validateData(args);
        Object.assign(this, args);
      }

    get collectionName() {
        return this.constructor.collectionName();
      }
    
    create(docParams) {
        //validate the schema
        var doc=firestore.collection(this.collectionName).doc().set(fields);
        this.$id=doc.id;
    }

    async read(id) {
        this=firestore.collection(this.collectionName).doc(id).get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });;
    this.fields = fields;
    }
    
    async read(id) {
        this=firestore.collection(this.collectionName).doc(id).get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });;
        this.fields = fields;
      }
  
    }
}