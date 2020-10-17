import db from './models';

const models = db.sequelize.models;

const Users = models.Users;
const Features = models.Features;

export {
  Users,
  Features
};