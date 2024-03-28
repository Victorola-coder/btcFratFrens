import { Twitter } from "./svg";

export default function Footer() {
 

  return (
    <footer>
      <section className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-[23px]">
          <Twitter />
          <h5 className="text-[#0F7BF8] font-inter font-semibold lg:text-[25.38px] lg:leading-[30.72px]">
            Follow us on Twitter
          </h5>
        </div>

        {/* line */}
        <div className="bg-[#383737] h-[3.27px] w-full mt-[37.65px]"></div>
        <div>
          <p className="font-eagle-lake font-normal text-[#585858] text-[25.38px] leading-[41.46px]">
            <span>&copy;</span> <span>2023</span>-{" "}
            <span>{new Date().getUTCFullYear()}</span> All rights reserved
          </p>
        </div>
      </section>
    </footer>
  );
}
