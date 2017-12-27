# Deployment

## TODO: CH EC2 deployment process

## AWS S3

### Easy 7-Step Deployment Process

*Step 1:* Run `yarn` to install dependencies, then `npm run build` to create the `./build` folder.

*Step 2:* Navigate to [AWS S3](https://aws.amazon.com/s3) and login (or sign up if you don't have an account). Click on `Services` followed by `S3` in the dropdown.

*Step 3:* Click on `Create Bucket` and fill out both your `Bucket Name` and `Region` (for the USA we recommend `US Standard`). Click `Create` to create your bucket.

*Step 4:* Open the `Permissions` accordion on the right (under the `Properties` tab) after selecting your new bucket. Click `Add more permissions`, set the `Grantee` to `Everyone` (or whoever you want to be able to access the website), and give them `View Permissions`. Click `Save`.

*Step 5:* Click on the `Static Website Hosting` accordion where you should see the URL (or *endpoint*) of your website (ie. example.s3-website-us-east-1.amazonaws.com). Click `Enable website hosting` and fill in both the `Index document` and `Error document` input fields with `index.html`. Click `Save`.

*Step 6:* Click on your new S3 bucket on the left to open the bucket. Click `Upload` and select all the files within your `./build` folder. Click `Start Upload`. Once the files are done, select all of the files, right-click on the selected files (or click on the `Actions` button) and select `Make Public`.

*Step 7:* Click on the `Properties` tab, open `Static Website Hosting`, and click on the *Endpoint* link. The app should be running on that URL.
