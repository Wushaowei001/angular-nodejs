


<div class="col-sm-9 col-md-9 col-lg-9">
    <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4 col-md-offset-4">
            <form name="loginForm" ng-controller="AuthController" ng-submit="login()" autocomplete="off">
                <div class="form-group">
                    <label for="email" class="control-label">Email</label>
                    <input type="email" ng-model="loginForm.email" class="form-control" placeholder="Email">
                    <p class="text-danger" ng-bind="errors.email"></p>
                </div>
                <div class="form-group">
                    <label for="password" class="control-label">Password</label>
                    <input type="password" ng-model="loginForm.password" class="form-control" placeholder="Password">
                    <p class="text-danger" ng-bind="errors.password"></p>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>

    </div>
</div>
