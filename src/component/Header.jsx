function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <h1 className='container'>{text}</h1>
    </header>
  )
}

Header.defaultProps = {
  text: 'Review My Code',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#66fa95',
}

export default Header
