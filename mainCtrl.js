module.exports = {

    getusers: (req,res,next) => {
        req.app.get('db').get_users()
        .then(response => res.json(response)
        .catch(err => console.log(err)))
    },

    getVehicles: (req,res,next) => {
        req.app.get('db').get_vehicles()
        .then(response => res.json(response)
        .catch(err => console.log(err)))
    },

    addUser: (req,res,next) => {

        req.app.get('db').add_user([req.body.name, req.body.email])
        .then(response => res.json(response))
        .catch(err => console.log(err))
    },

    addVehicle: (req, res, next) => {
        req.app.get('db').add_vehicle([req.body.make, req.body.model, req.body.year])
        .then(response => res.json(response))
        .catch(err => console.log(err))
    },

    userVehicleCount: (req,res,next) => {
        req.app.get('db').user_vehicle_count([req.params.userId])
        .then(response => res.json(response))
        .catch(err => console.log(err))
    },

    getAllVehicles: (req,res,next) => {
        req.app.get('db').get_user_vehicles([req.params.userId])
        .then(response => res.json(response))
        .catch(err => console.log(err))
    },


    allEmailVehicle: (req, res, next) => {
        const db = req.app.get("db");
        if (req.query.userEmail) {
          return db.get_vehicles_email([req.query.userEmail]).then(result => {
            return res.json(result);
          });
        }
        if (req.query.userFirstStart) {
          return db
            .get_vehicles_letters([req.query.userFirstStart + "%"])
            .then(result => {
              return res.json(result);
            });
        }
      },



    getVehicleByYear: (req,res,next) => {
        req.app.get('db').get_vehicle_year()
        .then(response => res.json(response))
        .catch(err => console.log(err))
    },

    changeOwner: (req,res,next) => {
        req.app.get('db').change_owner([req.params.vehicleId, req.params.userId])
        .then(response => res.json(response))
        .catch(err => console.log(err))
    },

    deleteVehicleOwner: (req,res,next) => {
        req.app.get('db').delete_vehicle_owner([req.params.vehicleId])
        .then(response => res.json(response))
        .catch(err => console.log(err))
    },

    deleteVehicle: (req, res, next) => {
        req.app.get('db').delete_vehicle([req.params.vehicleId])
        .then(response => res.json(response))
        .catch(err => console.log(err))
    }










}
