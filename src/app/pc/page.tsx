"use client";

import React from "react";
import PcHomeComponent from "@/components/pc/pc_home";

/**
 * PC首页组件
 * 使用客户端渲染，居中显示PC首页组件
 */
export default function PcHomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <PcHomeComponent />
    </div>
  );
}
