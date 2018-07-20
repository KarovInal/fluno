import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import FormFieldHOC from 'HOC/form-field-hoc';

const UploadButton = styled.div`
  width: 150px;
  height: 165px;
  cursor: pointer;
  padding: 10px;
  background-color: #F9FAFA;
  outline: dashed rgba(103, 107, 105, 0.5) 1px;
  outline-offset: -10px;
  border: solid #DEE3E1 1px;
  color: rgba(103, 107, 105, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url(${ ({previewImage}) => previewImage });
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

@FormFieldHOC({ type: 'file' })
class UploadFile extends Component {
  static propTypes = {
    onPhotoChange: PropTypes.func,
    previewImage: PropTypes.any
  };

  static defaultProps = {
    onPhotoChange: () => {}
  };

  get uploadProps() {
    return {
      action: '',
      name: 'photo',
      multiple: false,
      showUploadList: false,
      beforeUpload: this.beforeUpload,
    };
  };

  beforeUpload = file => new Promise(async (res, rej) => {
    const isJPG = file.type === "image/jpeg";
    if (!isJPG) {
      message.error('Неверное расширение файлов. Доступно только: JPEG, JPG');
      return rej('Неверное расширение файлов. Доступно только: JPEG, JPG');
    }
    
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Слишком большое изображение. Доступно не более 2 мб.');
      return rej('Слишком большое изображение. Доступно не более 2 мб.');
    }
    
    try {
      this.props.onPhotoChange(file);
    } catch(e) {
      rej(e);
    }
  })

  render() {
    let { previewImage } = this.props;

    if(typeof previewImage === 'object') {
      previewImage = URL.createObjectURL(previewImage);
    }

    return (
      <Upload {...this.uploadProps}>
        <UploadButton previewImage={ previewImage }>
          {
            !previewImage && (
              <div>
                <Icon type="upload" style={{ fontSize: '20px' }} />
                <p>
                  Загрузите файл
                  (.jpeg, .jpg)
                </p>
              </div>
            )
          }
        </UploadButton>
      </Upload>
    );
  }
}

export default UploadFile;
