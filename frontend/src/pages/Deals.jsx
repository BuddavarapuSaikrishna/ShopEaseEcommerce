import TodayDeals from "../components/deals/TodayDeals";
import BestOffers from "../components/deals/BestOffers";
import EndingSoon from "../components/deals/ComingSoon";
import DealsHeader from "../components/deals/DealsHeader";



const Deals = () => {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Deals Header */}
      <DealsHeader />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Today's Deals */}
        <TodayDeals/>
        
        {/* Best Offers */}
        <BestOffers/>

        {/* Ending Soon */}
        <EndingSoon/>
       
          </div>
    </main>
  );
};

export default Deals;