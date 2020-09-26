<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>Start</title>
<meta name="description" content="A responsive bootstrap 4 admin dashboard template by hencework" />
<!-- Favicon -->
<link rel="shortcut icon" href="favicon.ico">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<!-- Toggles CSS -->
<!-- Custom CSS -->
<link href="dist/css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
	<!-- Preloader -->
	<div class="preloader-it">
		<div class="loader-pendulums"></div>
	</div>
	<!-- /Preloader -->
	<!-- HK Wrapper -->
	<div class="hk-wrapper hk-vertical-nav">
		<!-- Top Navbar -->
		<nav class="navbar navbar-expand-xl navbar-dark fixed-top hk-navbar">
			<a id="navbar_toggle_btn" class="navbar-toggle-btn nav-link-hover" href="javascript:void(0);">
				<i class="ion ion-ios-menu"></i>
			</a>
			<a class="navbar-brand" href="dashboard1.html">
				<img class="brand-img d-inline-block" src="dist/img/logo-dark.png" alt="brand" />
			</a>
			<ul class="navbar-nav hk-navbar-content">
				<li class="nav-item">
					<a id="settings_toggle_btn" class="nav-link nav-link-hover" href="javascript:void(0);">
						<i class="ion ion-ios-settings"></i>
					</a>
				</li>
				<li class="nav-item dropdown dropdown-authentication">
					<a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<div class="media">
							<div class="media-img-wrap">
								<div class="avatar">
									<img src="dist/img/avatar12.jpg" alt="user" class="avatar-img rounded-circle">
								</div>
								<span class="badge badge-success badge-indicator"></span>
							</div>
							<div class="media-body">
								<span>
									Madelyn Shane
									<i class="zmdi zmdi-chevron-down"></i>
								</span>
							</div>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
						<a class="dropdown-item" href="profile.html">
							<i class="dropdown-icon zmdi zmdi-account"></i>
							<span>Profile</span>
						</a>
						<a class="dropdown-item" href="#">
							<i class="dropdown-icon zmdi zmdi-settings"></i>
							<span>Settings</span>
						</a>
						<div class="dropdown-divider"></div>
						<div class="sub-dropdown-menu show-on-hover">
							<a href="#" class="dropdown-toggle dropdown-item no-caret">
								<i class="zmdi zmdi-check text-success"></i>
								Online
							</a>
							<div class="dropdown-menu open-left-side">
								<a class="dropdown-item" href="#">
									<i class="dropdown-icon zmdi zmdi-check text-success"></i>
									<span>Online</span>
								</a>
							</div>
						</div>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">
							<i class="dropdown-icon zmdi zmdi-power"></i>
							<span>Log out</span>
						</a>
					</div>
				</li>
			</ul>
		</nav>
		<!-- /Top Navbar -->
		<!-- Vertical Nav -->
		<nav class="hk-nav hk-nav-light">
			<a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close">
				<span class="feather-icon">
					<i data-feather="x"></i>
				</span>
			</a>
			<div class="nicescroll-bar">
				<div class="navbar-nav-wrap">
					<ul class="navbar-nav flex-column">
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp">
								<i class="ion ion-ios-keypad"></i>
								<span class="nav-link-text">Dashboard</span>
							</a>
							<ul id="dash_drp" class="nav flex-column collapse collapse-level-1">
								<li class="nav-item">
									<ul class="nav flex-column">
										<li class="nav-item">
											<a class="nav-link" href="dashboard2.html">Project</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="dashboard3.html">Statistics</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>

					<hr class="nav-separator">
					<div class="nav-header">
						<span>Getting Started</span>
						<span>GS</span>
					</div>
					<ul class="navbar-nav flex-column">
						<li class="nav-item">
							<a class="nav-link" href="documentation.html">
								<i class="ion ion-ios-book"></i>
								<span class="nav-link-text">Documentation</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div id="hk_nav_backdrop" class="hk-nav-backdrop"></div>
		<!-- /Vertical Nav -->
		<!-- Setting Panel -->
		<div class="hk-settings-panel">
			<div class="nicescroll-bar position-relative">
				<div class="settings-panel-wrap">
					<div class="settings-panel-head">
						<img class="brand-img d-inline-block align-top" src="dist/img/logo-light.png" alt="brand" />
						<a href="javascript:void(0);" id="settings_panel_close" class="settings-panel-close">
							<span class="feather-icon">
								<i data-feather="x"></i>
							</span>
						</a>
					</div>
					<hr>
					
				</div>
			</div>
			<img class="d-none" src="dist/img/logo-light.png" alt="brand" />
			<img class="d-none" src="dist/img/logo-dark.png" alt="brand" />
		</div>
		<!-- /Setting Panel -->
		<!-- Main Content -->
		<div class="hk-pg-wrapper pb-0 px-0">
			<!-- Container -->
			<div class="container-fluid">
				<!-- Row -->
				<div class="row">
					<div class="col-xl-12">
							the content goes here
					</div>
				</div>
				<!-- /Row -->
			</div>
			<!-- /Container -->
		</div>
		<!-- /Main Content -->
	</div>
	<!-- /HK Wrapper -->
	<!-- jQuery -->
	<script src="../vendors4/jquery/dist/jquery.min.js"></script>
	<script src="../vendors4/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="dist/js/feather.min.js"></script>
	<script src="dist/js/init.js"></script>
</body>
</html>