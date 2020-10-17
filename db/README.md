### Migrations

#### Creating a new migration
new user table
```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,userID:string,phone:string
```

#### Running migrations
```
npx sequelize-cli db:migrate
```

#### Undoing migration
```
npx sequelize-cli db:migrate:undo
```

#### Insert Seed Data
```
npx sequelize-cli db:seed:all
```