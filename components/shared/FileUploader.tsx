// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useCallback } from "react";

import { FileUploadProps } from "@/types";
import { Button } from "../ui/button";
import { convertFileToUrl } from "@/lib/utils";

const FileUploader = ({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploadProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      className="flex-center flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
      {...getRootProps()}
    >
      <input className="cursor-pointer" {...getInputProps()} />
      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center">
          <img
            className="w-full object-cover object-center"
            src={imageUrl}
            height={250}
            width={250}
            alt="image"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <img
            src="/assets/icons/upload.svg"
            alt="file upload"
            height={77}
            width={77}
          />
          <h3 className="mb-2 mt-2">Drag phot here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button className="rounded-full" type="button">
            select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
