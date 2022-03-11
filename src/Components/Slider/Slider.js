import React, {useState} from 'react'
import "./Slider.css"
import dataSlider from "./dataSlider"
import BtnSlider from './BtnSlider'

export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 0,
        inProgress: false
    })

    const nextSlide = () => {
        if(slideAnim.index !== dataSlider.length - 1 && !slideAnim.inProgress){
            setSlideAnim({
                index: slideAnim.index + 1,
                inProgress: true
            })

            setTimeout(() => {
                setSlideAnim({
                    index: slideAnim.index + 1,
                    inProgress: false
                })
            }, 400)
        } 
        else if(slideAnim.index === dataSlider.length - 1 && !slideAnim.inProgress) {
            setSlideAnim({
                index: 0,
                inProgress: true
            })

            setTimeout(() => {
                setSlideAnim({
                    index: 0,
                    inProgress: false
                })
            }, 400)
        }
    }

    const prevSlide = () => {
        if(slideAnim.index !== 0 && !slideAnim.inProgress){

            setSlideAnim({
                index: slideAnim.index - 1,
                inProgress: true
            })

            setTimeout(() => {
                setSlideAnim({
                    index: slideAnim.index - 1,
                    inProgress: false
                })
            }, 400)
        } 
        else if (slideAnim.index === 0 && !slideAnim.inProgress) {

            setSlideAnim({
                index: dataSlider.length - 1,
                inProgress: true
            })

            setTimeout(() => {
                setSlideAnim({
                    index: dataSlider.length - 1,
                    inProgress: false
                })
            }, 400)
        }
    }

    const moveDot = index => {
        setSlideAnim({
            index,
            inProgress: false
        })
    }

  return (
    <div className='container-slider'>
        {dataSlider.map((obj, index) => {
            return(
                <div
                key={obj.id}
                className={slideAnim.index === index ? "slide active-anim" : "slide"}
                >
                   <img src={process.env.PUBLIC_URL + `/Imgs/img${index}.jpg`} alt={obj.title} />
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
           {dataSlider.map((item, index) => {
                return <button 
                className={slideAnim.index === index ? "dot active" : "dot"}
                onClick={() => moveDot(index)}
                ></button>
           })}         
        </div>
    </div>
  )
}