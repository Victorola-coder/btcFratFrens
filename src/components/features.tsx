import { FeaturesCont } from ".";

export default function Features() {
  return (
    <section id="features" className="flex flex-col">
      <h2 className="font-dot mx-auto text-center font-normal leading-[104.26px] text-[72px] text-white">
        BFF Smart Dozens
      </h2>

      <div className="lg:mx-[105px] lg:mt-[81px] flex flex-col gap-2">
        <FeaturesCont content="Immutable On-Chain Json" />
        <FeaturesCont content="Bitmap 3D Gallery" />
        <FeaturesCont content="No Royalties, No Drama" />
        <FeaturesCont content="Value-Added Services." />
        <FeaturesCont
          contentClass="max-w-[804px]"
          content="Low Supply for Scarcity and Collectability"
        />
        <FeaturesCont content="Focused on creating value." />
        <FeaturesCont content="No royalties or fees on your BFF" />
        <FeaturesCont content="Full IP rights on your BFF's artwork." />
      </div>
    </section>
  );
}
