"use client";
import React, { useState } from "react";
import {EventBubble} from '@/components/event';
import "./feed.css";

function MainFeed() {

  return (
    <div>
        <EventBubble/>
        <EventBubble/>
        <EventBubble/>
        <EventBubble/>
    </div>
  );
};


export default MainFeed;
