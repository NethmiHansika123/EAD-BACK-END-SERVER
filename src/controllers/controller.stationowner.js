const { Stationowner } = require("../modules/module.stationowner");

const createstationdetails = async (req, res, next) => {
  let owner = new Stationowner(req.body);
  await owner
    .save()
    .then((owner) => {
      res.status(200).json({ owner: "owner is added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};

const editDetails = async (req, res) => {
    await Stationowner.findById(req.params.id, function (err, stationowner) {
      res.json(stationowner);
    });
  };
  const updateDetails = async (req, res) => {
    await Stationowner.findById(req.params.id, function (err, stationowner) {
      console.log(req.body);
      if (!stationowner) res.status(404).send("data is not found");
      else {
        stationowner.petrolarrivaltime = req.body.petrolarrivaltime;
        stationowner.petrolfinishtime = req.body.petrolfinishtime;
        stationowner.dieselarrivaltime = req.body.dieselarrivaltime;
        stationowner.diesellfinishtime = req.body.diesellfinishtime;
        stationowner.status = req.body.status;
      
        stationowner
          .save()
          .then((stationowner) => {
            console.log(stationowner);
            res.json(stationowner);
          })
          .catch((err) => {
            res.status(400).send("unable to update database ");
          });
      }
    });
  };

const getdetails = (req, res, next) => {
    const id = req.params._id

    Stationowner.findById(id)
        .then(stationowner => {
            if (stationowner) {
                res.json(stationowner)
            } else {
                res.json('Details not found', "404")
            }
        })
        .catch(error => {
            res.status(400).send("unable to retrieve database ");
        })
}
module.exports = {
    createstationdetails,
    editDetails,
    updateDetails,
    getdetails,
   
  };