import { apiEndpoints } from '../../configs';

const FileService = {
  upload: (file: any) => {
    const data = new FormData();
    data.append('file', file);
    const options = {
      url: apiEndpoints.fileUploadCreate,
      data,
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    // return post(options);
  }
}

export default FileService;