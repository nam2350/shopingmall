import React, { useState } from 'react'
import { Icon } from 'antd'
import axios from 'axios'
import Dropzone from 'react-dropzone'

function FileUpload(props) {

    const [Images, setImages] = useState([])

    const dropHandler = (files) => {
        
        let formData = new FormData()

        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append('file', files[0])

        axios.post('/api/product/image', formData, config)
            .then(response => {
                if( response.data.success) {
                    console.log('이미지파일 업로드', response.data)
                    setImages([...Images, response.data.filePath] )
                    props.refreshFunction([...Images, response.data.filePath])

                }else {
                    alert('이미지를 저장하는데 실패했습니다.')
                }
            })
    }

    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image)
        console.log('image_index',currentIndex)

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div style={{ width: 200, height: 140, border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{fontSize: '2rem'}} />
                        </div>
                    </section>
                )}
            </Dropzone>

            <div style={{display:'flex', width: '200px', height: '140px', overflowX:'scroll'}}>
                    {Images.map((image, index)=> (
                        <div onClick={()=> deleteHandler(image)} key={index}>
                            <img style={{ minWidth: '200px', width: '200px', height:'140px'}}
                            src={`http://localhost:5000/${image}`} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default FileUpload
