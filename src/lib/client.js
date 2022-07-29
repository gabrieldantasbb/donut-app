import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "rwq0iwi3", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2022-07-25',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

