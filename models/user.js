// models/User.js
// models/User.js
class User extends Base {
    // Expected schema of the User record
    get schema() {
      return {
        uid: Joi.string(),
        createdAt: Joi.string().isoDate(),
        lastUpdated: Joi.string().isoDate(),
        displayName: Joi.string().allow('').allow(null).default(''),
        email: Joi.string().email({ minDomainSegments: 2 }).default(''),
        topics: Joi.array().items(Joi.string().valid(pyradise.topicslist)),
        emalVerified: Joi.bool().default(false),
        isAdmin: Joi.bool().default(false),
        isApprover: Joi.bool().default(false),
        isTrusted: Joi.bool().default(true)
      };
    }
  
    // Collection name found in firestore
    static collectionName() { return 'users'; }
  
    // Saves new user to Firestore with the same ID used with Firebase auth
    async create() {
      if (!this.id) {
        throw new Error('Users must have an id assigned by firebase');
      }
      const fields = this.fields;
      return firestore.collection(this.collectionName).doc(this.id).set(fields);
    }
  
    static async register(userParams) {
        if (!this.uid) {
            throw new Error('Users must have an id assigned by firebase');
          }
          const fields = this.fields;
          return firestore.collection(this.collectionName).doc(this.id).set(fields);
    }
  
    static async deleteUserById(id) {
      ...
    }
  
    ...
  };
    // Collection name found in firestore
    static collectionName() { return 'comment'; }
  
    // Saves new comment to Firestore with the same ID used with Firebase auth
    async create() {
      if (this.id) {
        throw new Error('Comment must have an id assigned by firebase');
      }
      const fields = this.fields;
      return firestore.collection(this.collectionName).doc().set(fields);
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

    static async findUnapproved() {
        firestore.collection(this.collectionName).get().where("approved","==",false).then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            });
        });
      }

      static async search() {
          firestore.Query().where(fieldPath,opStr,)
      }
  };