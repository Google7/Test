import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

class Hello {
	public static void main(String[] args) throws Exception {
		
		String drl = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/testdb";
		String select = "select * from userinfo";
		String userid = "root";
		String password = "password";
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		Class<?> cls = null;
		
		try {
			cls = Class.forName(drl);
			if (cls != null) {
				System.out.println("Drive Success");
			}
			
			connection = DriverManager.getConnection(url,userid,password);
			if (connection != null && !connection.isClosed()) {
				System.out.println("Connect success");
			}
			preparedStatement = connection.prepareStatement(select);
			if (preparedStatement != null) {
				System.out.println("Execute SQL");
			}
			resultSet = preparedStatement.executeQuery();
			if (resultSet != null) {
				System.out.println("Getting data success");
				while (resultSet.next()){
					System.out.print(resultSet.getInt("userid")+"***");
					System.out.print(resultSet.getString("username")+"***");
					System.out.print(resultSet.getString("userpwd")+"***");
					System.out.print(resultSet.getInt("usersex")+"***");
					System.out.print(resultSet.getInt("userages")+"***");
					System.out.print(resultSet.getString("usercity"));
					System.out.println(" ");
				}
			}
		} catch (ClassNotFoundException e) {
			System.err.println("Arguments not found");
		} catch (SQLException e) {
			System.err.println("Database exception");
		} catch (Exception e) {
			System.err.println("Other exception");
		} finally {
			if (resultSet != null) {
				resultSet.close();
				if (preparedStatement != null) {
					preparedStatement.close();
					if (connection != null && !connection.isClosed()) {
						connection.close();
						System.out.println("Data shutdown");
					}
				}
			}
		}
	}
}
