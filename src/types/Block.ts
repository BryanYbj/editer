//块Id
export type BlockId = string

//块类型
export type BlockType =
  | 'text'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'callout'
  | 'quote'


type SubNodes = BlockId[]
//块内容
type BaseBlockContent = {
  title: string
}
//基础块，所有块的基类
export interface BaseBlock {
  id: BlockId;
  type: BlockType
  content: BaseBlockContent
  subNodes: SubNodes
}


export interface TextBlock extends BaseBlock {
  type: 'text'
}

export interface Heading1Block extends BaseBlock {
  type: 'heading1'
}
export interface Heading2Block extends BaseBlock {
  type: 'heading2'
}
export interface Heading3Block extends BaseBlock {
  type: 'heading3'
}
export interface CalloutBlock extends BaseBlock {
  type: 'callout'
}
export interface QuoteBlock extends BaseBlock {
  type: 'quote'
}