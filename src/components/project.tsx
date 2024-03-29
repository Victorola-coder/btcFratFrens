export default function Project() {
  return (
    <section className="bg-project object-cover  mx-[48px] mt-[80px]">
      <h4 className="text-[49.85px] font-dot text-white leading-[59.82px] ">
        1st Underground <span className="text-[#504141] bg-white">Bitmap</span>
        &nbsp;Project
      </h4>
      <div className="flex flex-col mt-[16px] gap-[32px]">
        <div className="flex flex-1 gap-[50px] flex-row items-center ">
          <figure>
            <img src="/images/asjson.svg" alt="inscribed as Json" />
          </figure>
          {/* contents and button */}
          <div className="flex flex-col items-start gap-[30px]">
            <h4 className="font-lit font-normal text-white lg:leading-[58.82px] lg:text-[49.85px]">
              Inscribed as json
            </h4>
            <p className="font-inter text-[#FAFAFA] lg:max-w-[507.61px] lg:text-[16.79px] lg:leading-[41.87px]">
              The data for the art is encoded in json and inscribed on the
              Blockchain. The art is uploaded on a full bitmap block, and
              unlocks the NATs within.
            </p>

            <button className="transition-all duration-300 px-[24px] py-[16px] rounded-[47.4px] font-inter text-[16.79px] leading-[19.75px] drop-shadow-[#0A7CFF7A] shadow-[#0A7CFF1F] bg-[#0A7CFF]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center py-4 gap-[70px] flex-row-reverse items-center ">
          <figure>
            <img src="/images/bitmap.svg" alt="inscribed as bitmap" />
          </figure>
          {/* contents and button */}
          <div className="flex flex-col items-start gap-[30px]">
            <h4 className="font-lit font-normal text-white lg:leading-[58.82px] lg:text-[49.85px]">
              Unveiled on Bitmap
            </h4>
            <p className="font-inter text-[#FAFAFA] lg:max-w-[507.61px] lg:text-[16.79px] lg:leading-[41.87px]">
              The code is the provenance.The block is the gallery.The art is the
              masterpiece.
            </p>

            <button className="transition-all duration-300 px-[24px] py-[16px] rounded-[47.4px] font-inter text-[16.79px] leading-[19.75px] drop-shadow-[#0A7CFF7A] shadow-[#0A7CFF1F] bg-[#0A7CFF]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
