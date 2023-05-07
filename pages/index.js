import FeaturedProperties from "@/features/FeaturedProperties/FeaturedPropertiesy";
import HeroBanner from "@/features/Home/components/HeroBanner/HeroBannery"
import MeetTheTeam from "@/features/Home/components/MeetTheTeam/MeetTheTeamy";
import DefaultLayout from "@/features/layouts/defaultLayout/DefaultLayouty"

export default function Home({featuredProperties}) {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties featuredProperties={featuredProperties}/>
        <MeetTheTeam />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps(){
  const {hits} = require('../features/data/properties.json');
  return {
    props: {featuredProperties: hits}
  }
}