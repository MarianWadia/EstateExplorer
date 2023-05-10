import FeaturedProperties from "@/features/FeaturedProperties/FeaturedPropertiesy";
import HeroBanner from "@/features/Home/components/HeroBanner/HeroBannery"
import MeetTheTeam from "@/features/Home/components/MeetTheTeam/MeetTheTeamy";
import Partners from "@/features/Home/components/Partners/Partnersy";
import Testimonials from "@/features/Home/components/Testimonials/Testimonialsy";
import DefaultLayout from "@/features/layouts/defaultLayout/DefaultLayouty"

export default function Home({featuredProperties}) {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties featuredProperties={featuredProperties}/>
        <MeetTheTeam />
        <Partners />
        <Testimonials />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps(){
  const {hits} = require('../features/data/properties.json');
  return {
    props: {featuredProperties: hits.slice(0,5)}
  }
}