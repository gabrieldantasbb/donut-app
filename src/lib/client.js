import sanityClient from "@sanity/client";

export default sanityClient ({
    projectId: 'cnofmowq',
    dataset: 'production',
    apiVersion: '2022-06-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
