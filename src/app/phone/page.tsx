"use client";

import React from "react";
import PhoneHomeComponent from "@/components/mobile/phone_home";

/**
 * 手机首页组件
 * 使用客户端渲染，居中显示手机首页组件
 */
export default function PhoneHomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <PhoneHomeComponent />
    </div>
  );
}
