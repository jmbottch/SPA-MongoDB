var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase('C:\Users\bottc\Documents\Neo4j');

module.exports = db;