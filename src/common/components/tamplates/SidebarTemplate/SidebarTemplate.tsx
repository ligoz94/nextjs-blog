/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import { SidebarTemplateStyles } from './SidebarTemplate.style'
import { Col, Row } from 'antd'
import SEO from '@components/SEO/SEO'
import { PageMeta } from '@interfaces/post'

type SidebarTemplateProps = {
  pageMeta: PageMeta
  children: React.ReactNode
}

const DynamicNavbar = dynamic(() => import('@components/Navbar'))

const SidebarTemplate = (props: SidebarTemplateProps) => {
  const { pageMeta, children } = props

  return (
    <SidebarTemplateStyles>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        url={pageMeta.url}
        image={pageMeta.image}
        creator={pageMeta.creator}
      />

      <Row>
        <Col
          span={24}
          id='navbar'
          className='sidebar-template__navbar grid-container my-9'
          data-wow-duration='1s'
        >
          <DynamicNavbar />
        </Col>
      </Row>

      <Row className='sidebar-template__main grid-container ant-row'>{children}</Row>

      <Row>
        <div className='footer'></div>
      </Row>
    </SidebarTemplateStyles>
  )
}

SidebarTemplate.MainContent = ({ children }) => {
  return (
    <Col xs={24} lg={18} className='sidebar-template__content'>
      {children}
    </Col>
  )
}

SidebarTemplate.Sidebar = ({ children }) => {
  return (
    <Col xs={24} lg={6} className='sidebar-template__sidebar pl-5'>
      <div className='sticky-container'>
        <aside id='sticky-element'>{children}</aside>
      </div>
    </Col>
  )
}

export default SidebarTemplate
