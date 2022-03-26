import React from 'react'
import {Logo} from '../components/index';
const Footer = () => {
  return (
    <footer class="py-4 bg-dark text-light">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-3">
          <Logo/>
        </div>
				<div class="col-md-6 text-center">
					Copyright © 2022 Moto Dang. All rights reserved.
				</div>
				<div class="col-md-3">
					<div class="d-flex gap-3 justify-content-end">
						<a class="link-light" href="#s"><em class="bi bi-facebook"></em></a><a class="link-light" href="#s"><em class="bi bi-twitter"></em></a><a class="link-light" href="#s"><em class="bi bi-youtube"></em></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer