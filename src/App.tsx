import Header from './components/Header';
import Hero from './components/Hero';
import AnnouncementBar from './components/AnnouncementBar';
import FloatingTrustBar from './components/FloatingTrustBar';
import SeriesSection from './components/SeriesSection';
import PickUpItems from './components/PickUpItems';
import SizeDiagnosis from './components/SizeDiagnosis';
import SizeGuide from './components/SizeGuide';
import Ranking from './components/Ranking';
import BuyerShow from './components/BuyerShow';
import KnowledgeSection from './components/KnowledgeSection';
import MemberBenefits from './components/MemberBenefits';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-pink relative">
      {/* 1. 全局悬浮退换保障胶囊 (退货免运费) */}
      <FloatingTrustBar />

      <AnnouncementBar />

      <Header />
      
      <main>
        {/* 1. 首屏轮播 (痛点破冰) */}
        <Hero />

        {/* 2. 人气爆款 */}
        <Ranking />

        {/* 3. 胸型诊断互动区 (自我胸型诊断互动区) */}
        <SizeDiagnosis />

        {/* 4. 胸型分类系列 */}
        <SeriesSection />

        {/* 5. 真实穿着测评 (信赖与声音) */}
        <BuyerShow />

        {/* 6. 简易尺寸表 (你的尺寸是多少? 简易尺寸表) */}
        <SizeGuide />

        {/* 7. 教科书科普 (大胸型文胸挑选教科书/文胸只是媒体) */}
        <KnowledgeSection />

        {/* 8. 更多产品推荐 */}
        <PickUpItems />

        <MemberBenefits />
      </main>

      <Footer />
    </div>
  );
}
