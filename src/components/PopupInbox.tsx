import React, { useState, MouseEvent } from "react";
import { FaSearch } from "react-icons/fa";

const PopupInbox = () => {

  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setShowButton(!showButton);
  }
  return (
    <div className="container flex w-full justify-center">
      <div className="flex flex-col w-full md:w-[734px] h-max-[737px] bg-[#FFFFFF] p-6 rounded">
        {showButton && (
          <>
            <div className="flex flex-row px-[10px] gap-x-[17px] border-[#828282]">
              <div onClick={handleClick} className="flex flex-col py-3">
                <span className="arrow"></span>
                <span className="absolute cancle mx-[660px]"></span>
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex flex-row gap-4">
                  <div className="head-message font-bold text-base text-[#2F80ED]">
                    I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">3 Participants</p>
                </div>
              </div>
            </div>
            <hr style={{ width: '100%', textAlign: 'left', marginLeft: '0' }} />
            <div className="flex flex-col w-full h-auto items-center px-[10px]">
              <div className="self-end head-message font-bold text-base text-[#9B51E0]">
                You
              </div>
              <div className="ml-[200px] flex flex-row">
                <span className="dotted"></span>
                <div className="flex flex-col rounded px-3 py-2 bg-[#EEDCFF] border-[#EEDCFF] text-nowrap">
                  <p>No worries. It will be completed ASAP. I’ve asked him yesterday.</p>
                  <p>19:32</p>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-8 w-full flex flex-row">
              <div className="border-b-black my-3 border-b-2 w-full" />
              <p className="w-[65%] px-5 font-bold">Today June 09, 2021</p>
              <div className="my-3 border-b-2 border-b-black w-full" />
            </div>
            <div className="flex flex-col w-full h-auto items-center">
              <div className="self-start head-message font-bold text-base text-[#E5A443]">
                Mary Hilda
              </div>
              <div className="self-start flex flex-row">
                <span className="absolute ml-[28%] dotted"></span>
                <div className="flex flex-col w-[75%] rounded px-3 py-2 bg-[#FCEED3] border-[#EEDCFF] text-nowrap">
                  <p className="text-wrap">Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</p>
                  <p>19:32</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto items-center px-[10px]">
              <div className="self-end head-message font-bold text-base text-[#9B51E0]">
                You
              </div>
              <div className="ml-[200px] flex flex-row">
                <span className="mr-3 dotted"></span>
                <div className="text-balance flex flex-col rounded px-3 py-2 bg-[#EEDCFF] border-[#EEDCFF] text-nowrap">
                  <p>Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.</p>
                  <p>19:32</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto items-center">
              <div className="self-start head-message font-bold text-base text-[#E5A443]">
                Mary Hilda
              </div>
              <div className="self-start flex flex-row">
                <span className="absolute ml-[20%] dotted"></span>
                <div className="flex flex-col w-[100%] rounded px-3 py-2 bg-[#FCEED3] border-[#EEDCFF]">
                  <p>Sure thing, Claren</p>
                  <p>19:32</p>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-8 w-full flex flex-row">
              <div className="bg-[#EB5757] w-screen h-0.5 my-3" />
              <p className="text-[#EB5757] w-[100%] px-2 font-bold">New Message</p>
              <div className="bg-[#EB5757] w-screen h-0.5 my-3" />
            </div>
            <div className="flex flex-col w-full h-auto items-center">
              <div className="self-start head-message font-bold text-base text-[#43B78D]">
                Obaidullah Amarkhil
              </div>
              <div className="self-start flex flex-row">
                <span className="absolute ml-[20%] dotted"></span>
                <div className="flex flex-col w-[100%] rounded px-3 py-2 bg-[#D2F2EA]">
                  <p>Morning. I’ll try to do them. Thanks</p>
                  <p>19:32</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-8 w-[90%] h-10 items-center px-[10px] input-wrapper border rounded border-[#828282]">
              <input
                placeholder="Type a new message"
                className="w-full h-full text-[#4F4F4F] text-sm focus:outline-none"
              />
              <button className="absolute ml-[620px] rounded bg-[#2F80ED] text-white py-2.5 font-semibold px-4">
                Send
              </button>
            </div>
          </>
        )}
        {!showButton && (
          <>
            <div className="flex flex-row w-full h-10 items-center px-[60px] input-wrapper border rounded border-[#828282]">
              <input
                placeholder="Search"
                className="w-full h-full text-[#4F4F4F] text-sm focus:outline-none"
              />
              <FaSearch id="search-icon" size={12} className="text-[333333]" />
            </div>
            <div onClick={handleClick} className="flex flex-row py-[22px] gap-x-[17px] border-b border-[#828282]">
              <div className="flex flex-col">
                <div className="account"></div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex flex-row gap-4">
                  <div className="head-message font-bold text-base text-[#2F80ED]">
                    109220-Naturalization
                  </div>
                  <div className="date text-sm">January 1,2021 19:10</div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-sm">Cameron Phillips :</p>
                  <div className="flex flex-row">
                    <span className="text-sm">Please check this out!</span>
                    <span className="absolute mx-[600px] incoming-message"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-[22px] gap-x-[17px] border-b border-[#828282]">
              <div className="flex flex-col">
                <div className="account"></div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex flex-row gap-4">
                  <div className="head-message font-bold text-base w-[450px] text-[#2F80ED]">
                    Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]
                  </div>
                  <div className="date text-sm mx-[20px]">02/06/2021 10:45</div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-sm">Ellen:</p>
                  <span className="text-sm">Hey, please read.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-[22px] gap-x-[17px] border-b border-[#828282]">
              <div className="flex flex-col">
                <div className="account"></div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex flex-row gap-4">
                  <div className="head-message font-bold text-base text-[#2F80ED]">
                    8405-Diana SALAZAR MUNGUIA
                  </div>
                  <div className="date text-sm">01/06/2021 12:19</div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-sm">Cameron Phillips :</p>
                  <span className="text-sm">I understand your initial concerns and thats very valid, Elizabeth. But you ...</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-[22px] gap-x-[17px] border-b border-[#828282]">
              <div className="flex flex-col">
                <div className="f-help"></div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex flex-row gap-4">
                  <div className="head-message font-bold text-base text-[#2F80ED]">
                    FastVisa Support
                  </div>
                  <div className="date text-sm">01/06/2021 12:19</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm">Hey there! Welcome to your inbox.</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupInbox;
