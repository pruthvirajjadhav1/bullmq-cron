
export const htmlData = `
<html lang='en'>
	<head>
		<link rel='preconnect' href='https://fonts.googleapis.com' />
		<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
		<link
			href='https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap'
			rel='stylesheet'
		/>
	</head>
	<style>
		body { width: 100%; font-family: sans-serif; } .px {
		padding-left: 10px; padding-right: 10px; } .px2 { padding-left: 20px;
		padding-right: 20px; } .grid-div { display: grid; grid-template-columns: 1fr
		1fr; } table { margin-top: 5px; width: 100%; border-collapse: collapse; }
		td, th { border: 1px solid black; padding: 3px 5px 3px 5px; } hr {
		background-color: black; color: black; height: 1px; } .td-center {
		text-align: center; } p { margin: 2px 0; } h3 { font-size: 18px; } .b {
		font-weight: 700; } .t-sm { font-size: 12px; font-weight: 400; } .t-smb { font-size: 12px; font-weight: 700; } .t-md {
		font-size: 15px; } .t-lg { font-size: 22px; font-weight: 800; } img {
		height: 55px; } th { background-color: #ffe7e7; } footer { display: flex;
		justify-content: center; font-family: 'Nunito'; margin-top: 10px;} footer >
		a { display: flex; align-items: center; text-decoration: none; color: black;
		font-size: 18px; font-weight: 800; } .ol-logo { height: 25px; } .brand-logo
		{ height: 12mm; } .awb-barcode { height: 65px }
	</style>
	<body>
		<div
			style="
			display: flex;
			flex-direction: column;
			height: 99vh;
			border: 2px solid;
			width: 97%;
			padding: 5px 0;
			margin: 0;
			"
		>
			<div>
				<div class="brand-logo-div px" style="
					display: flex;
					width: 100%;
					"
				>
					<div class="bt">
						<div><p class="t-smb b">COURIER : DTDC</p></div>
						<div></div>
						<div><p class="t-smb b">AWB # : 7D0502771</p></div>
						<div></div>
						<div>
							<p>
								<img class="awb-barcode" src="data:image/png;base64,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&#x3D;&#x3D;" alt="awb barcode" />
							</p>
						</div>
					</div>
				</div>
				<div class="grid-div px" style="margin-top: 10px">
					<div class="b">
						<h4 style="margin: 0">Deliver To:</h4>
						<p class="t-sm">Abhay Tamta</p>
						<p class="t-sm">Lokmanya Nagar, Thane, Krushna Koyna Apartment</p>
						<p class="t-sm">Maharashtra, 400606</p>
							<p class="t-sm">Mobile No.: 7239895171</p>
					</div>
					
					<div>
						<div><p class="t-smb b"> </p></div>
						<div><p class="t-smb b">ROUTING CODE: NA</p></div>
						<div><p class="t-smb b"> </p></div>
						<div><p class="t-smb b">WEIGHT : 0.4 KG</p></div>
						<div><p class="t-smb b">DIMENSIONS : 10 x 10 x 5</p></div>
					</div>
				</div>
			
				<hr />

				<div class="grid-div px b">
					<div class="bt t-md">
						<p>PREPAID</p>
						<p></p>
					</div>
				</div>

				<div class="table-div px b">
					<table style="height: auto">
					<thead>
						<tr>
						<th class="t-smb b" style="padding: 5px 0 5px 0" class="td-center">SKU</th>
						<th class="t-smb b" style="padding: 5px 0 5px 0" class="td-center">ITEM</th>
						<th class="t-smb b" style="padding: 5px 0 5px 0" class="td-center">QTY</th>
						</tr>
					</thead>
					<tbody>
						<tr>
						<td class="t-sm b">wispy197.67</td>
						<td class="t-sm b">wispy hill</td>
						<td class="td-center t-sm b">1</td>
						</tr>
						<tr style="border-top: 2px solid">
						<td class="t-sm b" colspan="2" style="text-align: right">TOTAL</td>
						<td class="td-center t-sm b">1</td>
						</tr>
					</tbody>
					</table>
				</div>
			</div>

			<hr />
			<div class="grid-div px2 b">
				<div>
				</div>
				<div>
					<p class="t-smb b">ORDER #: OPE0233</p>
					<p>
						<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAABtCAYAAADwOecLAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAATL0lEQVR4nO2decy11xTFj6FqahFE0ZpnLRJDQoNG0xqqVaSmBGmoiEokpKjiE0NKSUjQkuIfCUoTc0mj1VQNLRox1lBFipojMZQqzs69T+5zXvc+zzpda53vvnF2cv7p+1t773P2Xc93h+feppTSfzascWz677WMSrupZ6T/WsbNb2KQcOdEajE8c1ZuvuWMEK2bV80C0TJnXjAqA9RujNE6zOAwJ9MDEu6cSC2GVxnGwbecEaJ186pZIFrmzAtGZYDajTFahxkc5mR6QMKdE6nF8CrDOPiWM0K0bl41C0TLnHnBqAxQuzFG6zCDw5xMD0i4cyK1GF5lGAffckaI1s2rZoFomTMvGJUBajfGaB1mcJiT6QEJd06kFsOrDOPgW84I0bp51SwQLXPmBaMyQO3GGK3DDA5zMj0g4c6J1GJ4lWEcfMsZIVo3r5oFomXOvGBUBqjdGKN1mMFhTqYHJNw5kVoMrzKMg285I0Tr5lWzQLTMmReMygC1G2O0DjM4zMn0gIQ7J1KL4VWGcfAtZ4Ro3bxqFoiWOfOCURmgdmOM1mEGhzmZHpBw50RqMbzKMA6+5YwQrZtXzQLRMmdeMCoD1G6M0TrM4DAn0wMS7pxILYZXGcbBt5wRonXzqlkgWubMC0ZlgNqNMVqHGRzmZHpAwp0TqcXwKsM4+JYzQrRuXjULRMucecGoDFC7MUbrMIPDnEwPSLhzIrUYXmUYB99yRojWzatmgWiZMy8YlQFqN8ZoHWZwmJPpAQl3TqQWw6sM4+BbzgjRunnVLBAtc+YFozJA7cYYrcMMDnMyPSDhzonUYniVYRx8yxkhWjevmgWiZc68YFQGqN0Yo3WYwWFOpgck3DmRWgyvMoyDbzkjROvmVbNAtMyZF4zKALUbY7QOMzjMyfSAhDsnUovhVYZx8C1nhGjdvGoWiJY584JRGaB2Y4zWYQaHOZkekHDnRGoxvMowDr7ljBCtm1fNAtEyZ14wKgPUbozROszgMCfTAxLunEgthlcZxsG3nBGidfOqWSBa5swLRmWA2o0xWocZHOZkekDCnROpxfAqwzj4ljNCtG5eNQtEy5x5wagMULsxRuswg8OcTA9IuHMitRheZRgH33JGiNbNq2aBaJkzLxiVAWo3xmgdZnCYk+kBCXdOpBbDqwzj4FvOCNG6edUsEC1z5gWjMkDtxhitwwwOczI9IOHOidRieJVhHHzLGSFaN6+aBaJlzrxgVAao3RijdZjBYU6mByTcOZFaDK8yjINvOSNE6+ZVs0C0zJkXjMoAtRtjtA4zOMzJ9ICEOydSi+FVhnHwLWeEaN28ahaIljnzglEZoHZjjNZhBoc5mR6QcOdEajG8yjAOvuWMEK2bV80C0TJnXjAqA9RujNE6zOAwJ9MDEu6cSC2GVxnGwbecEaJ186pZIFrmzAtGZYDajTFahxkc5mR6QMKdE6nF8CrDOPiWM0K0bl41C0TLnHnBqAxQuzFG6zCDw5xMD0i4cyK1GF5lGAffckaI1s2rZoFomTMvGJUBajfGaB1mcJiT6QEJd06kFsOrDOPgW84I0bp51SwQLXPmBaMyQO3GGK3DDA5zMj0g4c6J1GJ4lWEcfMsZIVo3r5oFomXOvGBUBqjdGKN1mMFhTqYHJNw5kVoMrzKMg285I0Tr5lWzQLTMmReMygC1G2O0DjM4zMn0gIQ7J1KL4VWGcfAtZ4Ro3bxqFoiWOfOCURmgdmOM1mEGhzmZHpBw50RqMbzKMA6+5YwQrZtXzQLRMmdeMCoD1G6M0TrM4DAn0wMS7pxILYZXGcbBt5wRonXzqlkgWubMC0ZlgNqNMVqHGRzmZHpAwp0TqcXwKsM4+JYzQrRuXjULRMucecGoDFC7MUbrMIPDnEwPSLhzIrUYXmUYB99yRojWzatmgWiZMy8YlQFqN8ZoHWZwmJPpAQl3TqQWw6sM4+BbzgjRunnVLBAtc+YFozJA7cYYrcMMDnMyPSDhzonUYniVYRx8yxkhWjevmgWiZc68YFQGqN0Yo3WYwWFOpgck3DmRWgyvMoyDbzkjROvmVbNAtMyZF4zKALUbY7QOMzjMyfSAhDsnUovhVYZx8C1nhGjdvGoWiJY584JRGaB2Y4zWYQaHOZkekHDnRGoxvMowDr7ljBCtm1fNAtEyZ14wKgPUbozROszgMCfTAxLunEgthlcZxsG3nBGidfOqWSBa5swLRmWA2o0xWocZHOZkekDCnROpxfAqwzj4ljNCtG5eNQtEy5x5wagMULsxRuswg8OcTA9IuHMitRheZRgH33JGiNbNq2aBaJkzLxiVAWo3xmgdZnCYk+kBCXdOpBbDqwzj4FvOCNG6edUsEC1z5gWjMkDtxhitwwwOczI9IOHOidRieJVhHHzLGSFaN6+aBaJlzrxgVAao3RijdZjBYU6mByTcOZFaDK8yjINvOSNE6+ZVs0C0zJkXjMoAtRtjtA4zOMzJ9ICEOydSi+FVhnHwLWeEaN28ahaIljnzglEZoHZjjNZhBoc5mR6QcOdEajG8yjAOvuWMEK2bV80C0TJnXjAqA9RujNE6zOAwJ9MDEu6cSC2GVxnGwbecEaJ186pZIFrmzAtGZYDajTFahxkc5mR6QMKdE6nF8CrDOPiWM0K0bl41C0TLnHnBqAxQuzFG6zCDw5xMD0i4cyK1GF5lGAffckaI1s2rZoFomTMvGJUBajfGaB1mcJiT6QEJd06kFsOrDOPgW84I0bp51SwQLXPmBaMyQO3GGK3DDA5zMj0g4c6J1GJ4lWEcfMsZIVo3r5oFomXOvGBUBqjdGKN1mMFhTqYHJNw5kVoMrzKMg285I0Tr5lWzQLTMmReMygC1G2O0DjM4zMn0gIQ7J1KL4VWGcfAtZ4Ro3bxqFoiWOfOCURmgdmOM1mEGhzmZHpBw50RqMbzKMA6+5YwQrZtXzQLRMmdeMCoD1G6M0TrM4DAn0wMS7pxILYZXGcbBt5wRonXzqlkgWubMC0ZlgNqNMVqHGRzmZHpAwp0TqcXwKsM4+JYzQrRuXjULRMucecGoDFC7MUbrMIPDnEwPSLhzIrUYXmUYB99yRojWzatmgWiZMy8YlQFqN8ZoHWZwmJPpAQl3TqQWw6sM4+BbzgjRunnVLBAtc+YFozJA7cYYrcMMDnMyPSDhzonUYniVYRx8yxkhWjevmgWiZc68YFQGqN0Yo3WYwWFOpgck3DmRWgyvMoyDbzkjROvmVbNAtMyZF4zKALUbY7QOMzjMyfSAhDsnUovhVYZx8C1nhGjdvGoWiJY584JRGaB2Y4zWYQaHOZkekHDnRGoxvMowDr7ljBCtm1fNAtEyZ14wKgPUbozROszgMCfTAxLunEgthlcZxsG3nBGidfOqWSBa5swLRmWA2o0xWocZHOZkekDCnROpxfAqwzj4ljNCtG5eNQtEy5x5wagMULsxRuswg8OcTA9IuHMitRheZRgH33JGiNbNq2aBaJkzLxiVAWo3xmgdZnCYk+kBCXdOpBbDqwzj4FvOCNG6edUsEC1z5gWjMkDtxhitwwwOczI9IOHOidRieJVhHHzLGSFaN6+aBaJlzrxgVAao3RijdZjBYU6mByTcOZFaDK8yjINvOSNE6+ZVs0C0zJkXjMoAtRtjtA4zOMzJ9ICEOydSi+FVhnHwLWeEaN28ahaIljnzglEZoHZjjNZhBoc5mR6QcOdEajG8yjAOvuWMEK2bV80C0TJnXjAqA9RujNE6zOAwJ9MDEu6cSC2GVxnGwbecEaJ186pZIFrmzAtGZYDajTFahxkc5mR6QMKdE6nF8CrDOPiWM0K0bl41C0TLnHnBqAxQuzFG6zCDw5xMD0i4cyK1GF5lGAffckaI1s2rZoFomTMvGJUBajfGaB1mcJiT6QEJd06kFsOrDOPgW84I0bp51SwQLXPmBaMyQO3GGK3DDA5zMj0g4c6J1GJ4lWEcfMsZIVo3r5oFomXOvGBUBqjdGKN1mMFhTqYHJNw5kVoMrzKMg285I0Tr5lWzQLTMmReMygC1G2O0DjM4zMn0gIQ7J1KL4VWGcfAtZ4Ro3bxqFoiWOfOCURmgdmOM1mEGhzmZHpBw50RqMbzKMA6+5YwQrZtXzQLRMmdeMCoD1G6M0TrM4DAn0wMS7pxILYZXGcbBt5wRonXzqlkgWubMC0ZlgNqNMVqHGRzmZHpAwp0TqcXwKsM4+JYzQrRuXjULRMucecGoDFC7MUbrMIPDnEwPSLhzIrUYXmUYB99yRojWzatmgWiZMy8YlQFqN8ZoHWZwmJPpAQl3TqQWw6sM4+BbzgjRunnVLBAtc+YFozJA7cYYrcMMDnMyPSDhzonUYniVYRx8yxkhWjevmgWiZc68tocehtg3r9vu7SZ69OjRA41H5vX5vP6a17V5XZDXi/K6Aai/Z14X53XljvWjvM7J6+153b+in9fm9ZO8Lp9Z5+Z1ayDfjfM6ccn/NK/f53VJXqcve6+JR+f1gbwuyutXef05r6+lxR5vA+jjTM9O/3tW69aP8zquUa4ePXZdxAP672n9U+B3gzn2bNCP17/yel9eN5rJFc/+/gnkG9bRM/kOSIsL4VRfzwP2+NC8vjHTS1wUnwD0c23F/i5ulKtHj10VD0wL88YD+x95fSivU9Li2cnwgD8ZyPPmJXt1Xp8dra8s844N9M6ZXDcbsd/P6wsT64y8bjKR63pp8axoyHdeXi/P64V5vSOv3y3/+zVp8exzKj4zyvPvvL6d11vzOimvr4/+9qe87jqT6/C0ONdNa5zvww1z9eixayJeKsaDOp7pPGD036+fVmaNf9nvMpNnuHhdteZvcXE5LK/z08pEUxeK8cXrhNkdTMdRo1yvWPP3A/P62fLvn5vJ9ai83p/X8XndYc3fjx3V+uB17Dfi6Wn1D0q87D5gS3L16LE18Yi0Mttb1vz9oLR4Pyf+/rqZXFMXryFukRbvqQX3yglOefH62DLPpWnxLGxdPDOtnk3djqgV+b+zzHXZdcwRLzmHl8w/z+tORD/KXD16bFWcmlYvmW61gTl9yVyRFs/GNgVy8YoYXsJNvXxRXrx+kbCL5TVL7liy3pvS6uXzpovlpogPAv621P86r3sRfShz9eixdfHNtHhwXzjBjF8KPXiCQy5e8Ub9lUvubROc6uJ1y1GeJ86wP1xye4h6Ed9d5vlWpe4hafUs9w95HUL0oMzVo8fWxT5p9SnVaya48QXgaRMccvF6/ijXYROc6uJ1v4RdeCMuWnLop6vr4rhRvVMrdPdOqw8OYp1I9KDM1aPHVka8cTs8wJ89ww7/ip80wWy6eMVF8tC8Xp3XL9Pq07h9JnKNL17x3tH5a1Z8aviCmb4PG+W57wx73pI7a4bbFPEm/vD+0m/S5pfh6+L1qfw0Nt57+0ia/8TSnatHj62Mg9PqAX7kDHtZmn9WMly84tncVaM1vEE/NtPcrRfji9fUiveV9p3Ic+SInXvPZ/jU9ZMz3M6Ii9RZozpx4ap9mXb3ZY4456tTub/T0vQenbl69NjKuE/CL17fW3JnTDDDxWtqxTO4JwO9jS9ev02LO8PXrXWfkI7j8Qm/eJ2TsNslxhEvRa8Y1Yj3EO9WoV8Xccd83HQ7fNCAfNLbIlePHlsTce9VPAuKB/RzZ9g/pvlP7IaLV9yp/9HRivuiXprXEQn7Gk+E6j2vI0Z55l42npvqLl7xMnH4VkJ8UhmfMiqf1eyfFrd3DM+abr8luXr02IqIj9Dn3rDfP60uAM+Y4NBbJZBQXbwePsrzoBl2eMP+E0DeN4zyxl32cx8GXNc4YVTnqC3K1aPHXo8vp8WD+YsTzJPS6kH/sAluGy9eh4zyPHaGvXzJnTnDxfcbhzvWP53XTYn+5iL+4RjuP3vZFuXq0WOvR3xdJh7M8SnZ/huY9y6Z+KRw6hcmtvHitV9aXWimPim9eVoZe+qlcex/uDcu3nOb+k6lIg5Mq3N4zhbl6tFjr0d8P28w97qXjndMq9skTpvJtY0Xr4jhvZ6vTjBHj+o9ZoIbf3r5VLIvJE4c1Ttoi3L16LEVEb/8MLzRvvN3rc5Oqwf8wTN5tvXiNXwFKtYxa/4e95tdklafhk69DDx+lMv9Bee4iA5f77l0i3L16LE1Ee8LDc+u4s7suMkx7qT/UloZFbnr3HXxil9CuHBixY8C7jeRKz7hHD4tjZeGb0yLn5CJLymHqYdbJGKdMtPXyWn1MnvPzDp8Ik+8RI/bT+KrUh/P61Vp8clofIXpXWn1/tswk3s0ytWjx66LeDN7eM9n54pnZjcEcgzPcBQXr7jlYOdvgE2tdc+oxvGsvP4ykyOMP3XXf8TOu9enVrwc33RryJ3B/cU9ZIfO9KTM1aPHroynpMUPBw73fsWd4vGLElPPasZxTMJvNUAinuXEM4ofzKxPpcVP7cxF3DwaX5MZ37AZK35h9cVp/sIVETe6XgD0FOs9M7kelxY/prjzF2zjQhT7fknC7xtT5urRY9dG/Ese3wlEnm3tjLhrfzeYJJ4RxXt46IXZGfEzQ/ESNn4IMr7ag/4/A9y5evTo0aPH/1P8F7rAFiuro5HFAAAAAElFTkSuQmCC"
						alt="order id barcode"
						/>
					</p>
				</div>
			</div>

			<hr />
			<div>
				<div class="px t-md" style="margin-top: 10px">
					<p>
					Invoice No. : OPE0233 | Invoice Date : 2023-09-20 14:38:51
					</p>
					<p>Gstin No: GSTINNO</p>
				</div>
				<hr />
				
					<div class="px t-sm">
						<p>TERMS AND CONDITIONS:</p>
						<p>
						1. Visit official website of DTDC to view the Conditions of
						Carriage
						</p>
						<p>
						2. Shipping charges are inclusive of service tax and all figures are
						in INR.
						</p>
					</div>
					<hr />
				<div class="px t-sm">
					<p>
					All disputes are subject to Maharashtra jurisdiction only. Goods
					once sold will only be taken back or exchanged as per the store's
					exchange/return policy.
					</p>
				</div>

				<hr />

				<div class="px t-sm">
				
					<p>
					<i>THIS IS AN AUTO-GENERATED LABEL AND DOES NOT NEED SIGNATURE.</i>
					</p>
				</div>

				
					<footer>
						<a href="https://openleaf.tech/">
							<p>
							Powered by Openleaf
							<!-- <img
											class="ol-logo"
											src="https://openleaf.tech/assets/img/logo.png"
										/></p -->
							</p>
						</a>
					</footer>
			</div>
		</div>
	</body>

</html>
`;
