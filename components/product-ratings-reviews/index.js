/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function ProductRatingsReviews() {
  return (
    <section
      className="pt-14 relative w-full"
      data-component-id="product-ratings-reviews"
    >
      <div className="w-full">
        <h2 className="font-manrope font-bold text-2xl text-black mb-8 text-center">
          Ratings & Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 max-xl:mx-auto">
          <div className="box flex flex-col gap-y-4 w-full ">
            <div className="flex items-center w-full">
              <p className="font-medium text-base text-black mr-0.5 w-3">1</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12042_8589)">
                  <path
                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12042_8589">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="h-2 w-full flex-grow rounded-3xl bg-amber-50 ml-5 mr-3">
                <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex"></span>
              </p>
              <p className="font-medium text-base text-black mr-0.5 w-14 text-right">
                989
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-base text-black mr-0.5 w-3">2</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12042_8589)">
                  <path
                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12042_8589">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="h-2 w-full flex-grow rounded-3xl bg-amber-50 ml-5 mr-3">
                <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex"></span>
              </p>
              <p className="font-medium text-base text-black mr-0.5 w-14 text-right">
                989
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-base text-black mr-0.5 w-3">3</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12042_8589)">
                  <path
                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12042_8589">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="h-2 w-full flex-grow rounded-3xl bg-amber-50 ml-5 mr-3">
                <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex"></span>
              </p>
              <p className="font-medium text-base text-black mr-0.5 w-14 text-right">
                989
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-base text-black mr-0.5 w-3">4</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12042_8589)">
                  <path
                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12042_8589">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="h-2 w-full flex-grow rounded-3xl bg-amber-50 ml-5 mr-3">
                <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex"></span>
              </p>
              <p className="font-medium text-base text-black mr-0.5 w-14 text-right">
                989
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-base text-black mr-0.5 w-3">5</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12042_8589)">
                  <path
                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12042_8589">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="h-2 w-full flex-grow rounded-3xl bg-amber-50 ml-5 mr-3">
                <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex"></span>
              </p>
              <p className="font-medium text-base text-black mr-0.5 w-14 text-right">
                989
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
            <h2 className="font-manrope font-bold text-4xl text-amber-400 mb-4">
              4.3
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2608)">
                  <path
                    d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2608">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2608)">
                  <path
                    d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2608">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2608)">
                  <path
                    d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2608">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2608)">
                  <path
                    d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2608">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2608)">
                  <path
                    d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2608">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-medium text-base leading-8 text-gray-900 text-center">
              46 Ratings
            </p>
          </div>
        </div>

        <div className="py-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="font-manrope font-semibold text-md sm:text-lg leading-9 text-black mb-6">
            Outstanding Experience!!!
          </h3>
          <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <Image
                  className="max-w-full max-h-full object-contain mx-auto"
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="John image"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <h6 className="font-semibold text-md leading-8 text-indigo-600 ">
                John Watson
              </h6>
            </div>
            <p className="font-normal text-base leading-8 text-gray-400">
              Nov 01, 2023
            </p>
          </div>
          <p className="font-normal text-base text-gray-400">
            One of the standout features of Pagedone is its intuitive and
            user-friendly interface. Navigating through the system feels
            natural, and the layout makes it easy to locate and utilize various
            design elements. This is particularly beneficial for designers
            looking to streamline their workflow.
          </p>
        </div>
        <div className="py-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="font-manrope font-semibold text-md sm:text-lg leading-9 text-black mb-6">
            Outstanding Experience!!!
          </h3>
          <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <Image
                  className="max-w-full max-h-full object-contain mx-auto"
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="John image"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <h6 className="font-semibold text-md leading-8 text-indigo-600 ">
                John Watson
              </h6>
            </div>
            <p className="font-normal text-base leading-8 text-gray-400">
              Nov 01, 2023
            </p>
          </div>
          <p className="font-normal text-base text-gray-400">
            One of the standout features of Pagedone is its intuitive and
            user-friendly interface. Navigating through the system feels
            natural, and the layout makes it easy to locate and utilize various
            design elements. This is particularly beneficial for designers
            looking to streamline their workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
