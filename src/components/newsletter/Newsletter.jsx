import React from "react";
import NewsletterBG from "../../assets/images/NewsletterBg.png";

export default function Newsletter() {
  return (
    <div className="bg-[#FAFBFC] font-apercu">
      <div className="container mx-auto my-auto">
        <div className="py-8">
          <div className="px-2 lg:px-0 grid grid-cols-12 bg-white  rounded border border-[#111]/10 ">
            <div
              className="col-span-6 md:col-span-7 bg-no-repeat bg-cover bg-left py-10 md:py-20 lg:ps-20"
              style={{ backgroundImage: `url(${NewsletterBG})` }}
            >
              <div className="font-bold text-2xl md:text-4xl">
                Stay up to date !
              </div>
              <div className="text-sm md:text-xl my-4">
                Subscribe to our newsletter to get inbox notifications.
              </div>
            </div>
            <div className="col-span-6 md:col-span-5 py-10 md:py-20 ">
              <div className="text-sm pb-4">Sign up to our newsletter ↓</div>
              <div>
                <form class="max-w-sm ">
                  <div class="flex">
                    <input
                      type="text"
                      class="rounded-s bg-[#F5F8FB] border border-[#111]/10 text-[#111] block flex-1 min-w-0 w-full text-sm p-2.5  focus:outline-none focus:ring-0"
                      placeholder="Enter your email"
                    />
                    <span class="cursor-pointer inline-flex items-center px-4 py-1 text-sm text-white bg-[#444BFF] border border-e-0 border-[#444BFF] rounded-e">
                      Subscribe
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
