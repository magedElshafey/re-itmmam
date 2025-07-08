import HtmlRenderer from "../../../../components/common/html/HtmlRender"

interface CopyRightProps {
    copyRight? : string
}
const CopyRight : React.FC<CopyRightProps> = ({copyRight}) => {
  return (
    <div className="w-full flex justify-center">
      <HtmlRenderer html= {copyRight || ""} /> 
   
  </div>
  )
}

export default CopyRight