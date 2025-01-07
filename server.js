import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */
    app.get("/filteredimage", async (req, res) => {
      let { image_url } = req.query;
      // 1. validate the image_url query
      if (!image_url) {
        return res
          .status(422)
          .send(`Missing required param: image_url`);
      }

      // call filterImageFromURL(image_url) to filter the image
      filterImageFromURL(image_url)
        .then((result) => {
          // send the resulting file in the response
          res
            .status(200)
            .sendFile(result);

          // deletes any files on the server on finish of the response
          res.on('finish', async () => await deleteLocalFiles([result]));
        })
        .catch((error) => {
          console.log(error);
          res
          .status(500)
          .send(error);
        })
    });
  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();