import * as React from "react"

const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 30} height={props.height || 30} {...props}>
    <path d="M15 3C8.373 3 3 8.373 3 15c0 6.016 4.432 10.984 10.206 11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C22.481 26.083 27 21.075 27 15c0-6.627-5.373-12-12-12z" />
  </svg>
)

export default Facebook
