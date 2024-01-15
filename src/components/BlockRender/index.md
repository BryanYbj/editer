# 块渲染器

基本内容
//块Id

//块类型
export type BlockType =
  | 'text'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'callout'
  | 'quote'


//块内容
type BaseBlockContent = {
  title: string
}



类型
 TextBlock 
 Heading1Block
 Heading2Block 
 Heading3Block 
 CalloutBlock 
 QuoteBlock 