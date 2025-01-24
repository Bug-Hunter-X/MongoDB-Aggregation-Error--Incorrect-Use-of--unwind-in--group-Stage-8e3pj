```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: { /* some criteria */ }
  },
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments"
    }
  },
  {
    $unwind: "$relatedDocuments" 
  }, //Error prone step
  {
    $group: {
      _id: "$_id",
      relatedData: {
        $push: "$relatedDocuments"
      }
    }
  }
]);
```