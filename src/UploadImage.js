import React, {useState} from 'react';
import axios from 'axios';

export function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append('Image', selectedFile);

		axios.post('https://run.mocky.io/v3/26c2a825-0334-4b15-9a7b-4caeafac2511',{body: formData})
			.then((result) => {
				console.log('Success:', result);
        axios.put("https://shimnit-int-images.s3.amazonaws.com/selfie_5b87ad6f-e093-4f83-b788-7acc12d79593-demo.png?AWSAccessKeyId=ASIAWU2XEWAQBNHY6IVU&Signature=O7%2BKzUE%2Fvzdghj2VIYifVjBgDTk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAOflA9hBNUE%2F20MRgBXwjtCtMbJ%2F8oTbJDLnLhM1x1LFAiAwZ5%2FRbjDA2C%2FWlt6jMoN4fkF%2FOOk0xkMk%2FzUW9h5bUirjAQik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDQ1NzA1OTkwNTU2OCIMzfh5PFf636bgRaHmKrcBrAj0cdWGlePFfx8J%2F54RyVLzjXSfbmvnAfZgi4pfpnyBzMtr2y9MR8yV1xrxTWKb6hdVE%2FH556GpXjQo2jwFiQ%2BEuROrNRJ2ZTc%2BfbaPPYsFhCgu2yFZUHQFGMub8lX9B7F1AFmmm09jIO9lcT3itR4OmUv9N%2FinOIpKoFWbvVZZXT9Jm5BiyEfku8isodxaQJH6fdC0xcx1MKLwSE2G%2Bv7ijgB05In5QlhUjBXnneayikKkZMHGMPym%2BIEGOuABLvOA7SjcGLSdwqpksrmjw4iY50IqcVPfDC7jKvqDfTjnr%2FkwF%2FaXSNL15cByDhcD6CmU6y%2F3%2BwpH3GvN%2FOtj2es5szQdjYMDdaTPGM5hfeWOLrGQa1x5ulKUMv0wuvUWRKKB6hGQt8pTOsEdmKAnJehV9i8t%2BUjzDGjnn%2BBe6wf%2B1YPIgXpcWZ4i93EikDoBwMZXCmeDRe2oxA2RzVbN4%2BAB1lQdz4npm%2Fpe0eN%2F%2BBsGuOk5mUz4Xa5ePgVQu7iQXzl1HVEE7Wg%2Fh3yxKUCxMlkg1t8L3g%2BdPhEurTjQhqc%3D&Expires=1614682803",
        'https://run.mocky.io/v3/26c2a825-0334-4b15-9a7b-4caeafac2511',{headers: {'Content-Type': 'multipart/form-data'}})
          .then(r => console.log("success", r)).catch(e => console.log("Error:", e));
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	};

  return(
    <div>
       <input type="file" name="file" onChange={changeHandler} />
       {isFilePicked ? (
         <div>
           <p>Filename: {selectedFile.name}</p>
           <p>Filetype: {selectedFile.type}</p>
           <p>Size in bytes: {selectedFile.size}</p>
           <p>
             lastModifiedDate:{' '}
             {selectedFile.lastModifiedDate.toLocaleDateString()}
           </p>
         </div>
       ) : (
         <p>Select a file to show details</p>
       )}
       <div>
         <button onClick={handleSubmission}>Submit</button>
       </div>
     </div>
   )
}
