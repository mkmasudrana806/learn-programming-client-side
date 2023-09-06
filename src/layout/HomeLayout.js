import React from "react";
import Hero from "../Pages/hero/Hero";
import Ecosystem from "../Pages/educational ecosystem/Ecosystem";
import TopCategories from "../Pages/categories/TopCategories";
import Choose from "../Pages/choose to learn/Choose";
import WhyLearnProgramming from "../Pages/why learn programming/WhyLearnProgramming";
import MemberShip from "../Pages/memberShipPlan/MemberShip";
import FeaturedCourses from "../Pages/featured courses/FeaturedCourses";
import PremiumPacks from "../Pages/premium packs/PremiumPacks";

const HomeLayout = () => {
  return (
    <div>
      <Hero></Hero>
      <WhyLearnProgramming></WhyLearnProgramming>
      <Choose></Choose>
      <TopCategories></TopCategories>
      <PremiumPacks></PremiumPacks>
      <Ecosystem></Ecosystem>
      <MemberShip></MemberShip>
    </div>
  );
};

export default HomeLayout;
