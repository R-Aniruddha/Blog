export const sanityConfig = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  //projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  projectId: 'x7o1y55v',
  useCdn: true,
}
