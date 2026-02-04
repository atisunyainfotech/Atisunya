"use client";

import Image from "next/image"

import Tag from "@/components/globals/Tag";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import cardsData from "./cardsData";

import ChevronIcon from "@/assets/icons/chevron.svg"
import ProgressLine from "./ProgressLine";
import Link from "next/link";


const ConsultingCards = () => {

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const intervalId = useRef<null | NodeJS.Timeout>(null);

  const getHeight = (index: number) => {

    if (!cardsWrapperRef.current) return '0px'

    const paragraph = cardsWrapperRef.current.querySelector(`article:nth-of-type(${index}) p`) as HTMLParagraphElement;

    return `${paragraph.offsetHeight}px`

  }


  const handleTabClick = (index: number) => {

    setCurrentIndex(index);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }

    intervalId.current = setInterval(() => {

      setCurrentIndex(prev => {
        if (prev === cardsData.length - 1) {
          return 0
        } else {
          return prev! + 1
        }
      })
    }, 6000)

  }

  useEffect(() => {

    setCurrentIndex(0)
    intervalId.current = setInterval(() => {

      setCurrentIndex(prev => {
        if (prev === cardsData.length - 1) {
          return 0
        } else {
          return prev! + 1
        }
      })
    }, 6000)

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    }

  }, [])


  return (
    <section id="solutions" className="tabsection py-14 text-blue overflow-hidden">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-medium">
          Where Expertise Meets Execution-
          <br />
          <span className="text-yellow">Your ERP Consulting Arm</span>
        </h2>

        <div className="grid lg:grid-cols-2 ">
          <div className="mt-16 ">
            <Tag text="Our Expertise" />
            <div ref={cardsWrapperRef} className="mt-6 lg:pr-20">
              {
                cardsData.map(card => <TabArticle
                  key={card.index}
                  isActive={currentIndex === card.index}
                  card={card}
                  getHeight={getHeight}
                  handleTabClick={handleTabClick.bind(null, card.index)}
                />)
              }
            </div>
          </div>

          <div className="relative w-full h-[400px] lg:min-h-[650px] max-lg:mt-8">
            <figure
              className="relative w-full h-full"
            >
              {
                cardsData.map((item) => (
                  <Image key={item.index} src={item.image} alt={item.title} layout="fill"
                    className={`object-cover ${styles.tabImage} ${item.index === currentIndex && styles.active}`}
                  />
                ))
              }
            </figure>

            {
              cardsData.map((item, index) => (
                <div key={index} className={`${styles.tabImageContent} ${item.index === currentIndex && styles.active} absolute h-full w-full flex flex-col justify-between top-0 left-0 p-5`}>
                  <p className="text-white max-w-sm ml-auto text-right tracking-tight text-lg invisible">{item.description}</p>
                  <h5 className="text-4xl text-white">{item.title}</h5>
                </div>
              ))
            }
          </div>
        </div>
        <div className="mt-5 flex max-lg:justify-center">
          <Link href={"/contact-us"} className="text-blue bg-yellow font-medium px-4 py-2 rounded-md">
            Book a call
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ConsultingCards



type TabArticleProps = {
  isActive: boolean
  card: typeof cardsData[number]
  getHeight: (index: number) => string

  handleTabClick: () => void
}

const TabArticle = ({ card, isActive, getHeight, handleTabClick }: TabArticleProps) => {
  return (
    <article key={card.index} className="py-8 border-y border-border-light relative">
      <div onClick={handleTabClick} className={`flex justify-between items-center cursor-pointer ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        <div className={`flex gap-x-6 items-center transition-opacity duration-400`}>
          <Image src={card.icon} alt={card.title} className={`transition-all object-contain  ${isActive ? "w-10 h-10 lg:h-14 lg:w-14" : 'w-7 h-7 lg:h-9 lg:w-9'}`} />
          <h3 className={`transition-all duration-400 ${isActive ? "text-xl lg:text-2xl" : "text-base lg:text-lg"} font-medium  text-blue`}>{card.title}</h3>

        </div>
        <Image src={ChevronIcon} alt="" width={14} height={14}
          className={`transition-transform duration-300 ${isActive ? 'rotate-0' : 'rotate-180'}`}
        />
      </div>
      <div
        style={{
          height: isActive ? getHeight(card.index + 1) : '0px',
          transition: "height 0.4s ease"
        }}
        className={`overflow-hidden transition transition-height duration-400`}
      >
        <p className=" lg:w-10/12 text-gray pt-4 max-lg:text-sm">{card.description}</p>
      </div>
      {isActive && <ProgressLine />}

    </article>
  )
}
